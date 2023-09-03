import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { toastOptions } from '@/utils/toast';
import Image from 'next/image';
// import ReactWhatsapp from 'react-whatsapp';

export default function JoinNow() {
    const router = useRouter();
    const formRef = useRef(null);

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
            <form ref={formRef} onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    required
                />
                <input type="tel" placeholder="Phone" name="phone" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="submit" value="submit" />
            </form>
            <section>
                <h2>Have any questions? Leave me a message here</h2>
                {/* <ReactWhatsapp
                    number="1-212-736-5000"
                    message="Hello World!!!"
                /> */}
                <div className="logo-container">
                    <Image
                        src={'/whatsapp.svg'}
                        alt="whatsapp"
                        width={60}
                        height={60}
                        className="whatsapp-logo"
                    />
                    <Image
                        src={'/instagram.svg'}
                        alt="instagram"
                        width={60}
                        height={60}
                    />
                </div>
            </section>
        </section>
    );
}
