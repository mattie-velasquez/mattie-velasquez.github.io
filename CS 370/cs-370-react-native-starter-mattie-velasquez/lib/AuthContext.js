import React, { createContext, useState, useEffect } from 'react'
import { supabase } from './supabase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getInitialSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user) {
                fetchUserProfile(session.user.id);
            } else {
                setLoading(false);
            }
        };

        getInitialSession();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session?.user) {
                    fetchUserProfile(session.user.id);
                } else {
                    setUser(null);
                }
            }
        );

        return () => listener.subscription.unsubscribe();
    }, []);

    const fetchUserProfile = async (userId) => {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw error;
            
            setUser(data);
        } catch (error) {
            console.log('Error fetching user profile:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext