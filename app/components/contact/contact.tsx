'use client'
import { useState } from 'react';
import SubmitButton from '../buttons/SubmitButtom';
import Image from 'next/image';

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBusinessChange = (e) => {
    setBusiness(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendDiscordMessage = async () => {
    const roleId = '1126197552610549852';
    const roleMention = `<@&${roleId}>`;
    const content = `
      ${roleMention}
      New Contact Form Submission:
      Name: ${name}
      Email: ${email}
      Business: ${business}
      Message: ${message}
    `;

    try {
      const response = await fetch('/api/sendDiscordMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        console.log('Message sent to Discord successfully');
      } else {
        console.error('Failed to send message to Discord');
      }
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDiscordMessage();
    setEmail('');
    setName('');
    setBusiness('');
    setMessage('');
  };

  return (
    <div id='contact' className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <form className='flex flex-col w-full xl:w-7/12 text-pearl' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col flex-grow'>
              <span className='m-1'>Name*</span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className='border-2 border-black rounded-md px-2 py-1 md:mr-2 bg-gray-light text-black focus:outline-none'
              />
            </div>
            <div className='flex flex-col flex-grow mt-2 md:mt-0'>
              <span className='m-1'>Business</span>
              <input
                type="text"
                id="business"
                value={business}
                onChange={handleBusinessChange}
                className='border-2 border-black flex-grow rounded-md px-2 py-1 bg-gray-light text-black focus:outline-none'
              />
            </div>
          </div>
          <div className='flex flex-col mt-2'>
            <span className='m-1'>Email*</span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className='border-2 border-black rounded-md px-2 py-1 bg-gray-light text-black focus:outline-none'
            />
          </div>
          <div className='flex flex-col mt-2'>
            <span className='m-1'>Message*</span>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
              rows={6}
              className='border-2 border-black rounded-md px-2 py-1 bg-gray-light text-black focus:outline-none'
            />
          </div>
          <div className='mt-3'>
            <SubmitButton />
          </div>
        </form>
        <div className='xl:flex items-center justify-center hidden'>
          <Image src='/mail.svg' width={360} height={360} alt={'Mail Image'} />
        </div>
      </div>
    </div>
  )
}