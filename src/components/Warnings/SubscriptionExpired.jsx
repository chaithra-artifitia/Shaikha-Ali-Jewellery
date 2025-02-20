import React from 'react';
import { bullionLogo1, Warning } from '../../assets/images';

const SubscriptionExpired = () => {
    return (
        <div className="flex items-center justify-center px-4 py-7">
            <div className="relative w-full text-center">
                <div className='flex justify-center items-center mb-4'>
                    <img src={Warning} alt="warning" className='w-48' />
                </div>
                {/* Error message */}
                <h1 className="text-mid_red text-5xl font-bold mb-4">
                    Subscription has expired    
                </h1>

                {/* Subtext */}
                <div className="text-white mb-4 font-medium">
                    <p className="text-xl">Subscription has expired</p>
                    <p className="text-xl">Please contact our support team</p>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={bullionLogo1} alt="bullionLogo1" className='h-6' />
                </div>

                {/* Support contact */}
                <div className="flex items-center font-medium justify-center gap-2 text-white text-xl">
                    <svg fill="#FFFFFF" width="22" height="22" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 0C11.663 0 0 11.663 0 26c0 4.891 1.359 9.639 3.937 13.762-1.027 3.598-2.882 10.404-2.902 10.475a1 1 0 0 0 1.259 1.218l10.276-3.17A25.946 25.946 0 0 0 26 52c14.337 0 26-11.663 26-26S40.337 0 26 0zM26 50a23.92 23.92 0 0 1-12.731-3.651c-.161-.101-.346-.152-.531-.152-.099 0-.198.015-.294.044l-8.999 2.77c.661-2.413 1.849-6.729 2.538-9.13a1 1 0 0 0-.122-.821A23.924 23.924 0 0 1 2 26C2 12.767 12.767 2 26 2s24 10.767 24 24S39.233 50 26 50z" />
                        <path d="M42.985 32.126c-1.846-1.025-3.418-2.053-4.565-2.803-.876-.572-1.509-.985-1.973-1.218-1.297-.647-2.28-.19-2.654.188a2 2 0 0 0-.125.152c-1.347 2.021-3.106 3.954-3.621 4.058-.595-.093-3.38-1.676-6.148-3.981-2.826-2.355-4.604-4.61-4.865-6.146C20.847 20.51 21.5 19.336 21.5 18c0-1.377-3.212-7.126-3.793-7.707-.583-.582-1.896-.673-3.903-.273a1 1 0 0 0-.511.273c-.243.243-5.929 6.04-3.227 13.066 2.966 7.711 10.579 16.674 20.285 18.13a19.947 19.947 0 0 0 3.105.247c5.71 0 9.08-2.873 10.029-8.572a1 1 0 0 0-.37-.205zM30.648 39.511c-10.264-1.539-16.729-11.708-18.715-16.87-1.97-5.12 1.663-9.685 2.575-10.717.742-.126 1.523-.179 1.849-.128.681.947 3.039 5.402 3.143 6.204 0 .525-.171 1.256-2.207 3.293A1 1 0 0 0 17 22c0 5.236 11.044 12.5 13 12.5 1.701 0 3.919-2.859 5.182-4.722.073.003.196.028.371.116.36.181.984.588 1.773 1.104 1.042.681 2.426 1.585 4.06 2.522-1.742 3.48-3.816 7.091-11.738 5.991z" />
                    </svg>

                    <span>Support : </span>
                    <a href="tel:+97155705211" className="hover:text-red-500 transition-colors">
                        +971 55 705 2211
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionExpired;
