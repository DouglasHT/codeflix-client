'use client';
import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';

export const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      width={30}
      height={30}
      src={profile}
      alt='Profile'
      className='cursor-pointer rounded' />
  </div>
);