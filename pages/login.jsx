import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { toastOptions } from '@/utils/toast';

export default function JoinNow() {
    const router = useRouter();
    const loginForm = useRef(null);

    const submit = async (e) => {
        // try {
        e.preventDefault();
        // const { email, phone, fullName } = e.target;
        const fullName = e.target.fullName.value.trim();
        const phone = e.target.phone.value.trim();
        const email = e.target.email.value.trim();
        console.log(fullName, phone, email);
        toast(
            `Thanks for your submmision, I'll contact you shortly`,
            toastOptions
        );
        // router.push('/');
        // } catch (error) {
        //     console.log(error);
        //     throw error;
        // }
    };

    return (
        <section className="join-now">
            <form ref={loginForm} onSubmit={submit}>
                <input type="email" placeholder="Email" name="email" required />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <input type="submit" value="submit" />
            </form>
        </section>
    );
}
