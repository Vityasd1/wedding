import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { Header } from '../components/Header'
import { Timer } from '../components/Timer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Feedback () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_t2g5bsr', 'template_47cngd7', form.current, 'user_UjmOFSlktDIhZjgnFIoF0').then((result) => {
      form.current.reset();
      toast.success('Sikeres küldés! 😊', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, (error) => {
      toast.success('Sikertelen küldés kérlek próbáld újra később', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }


  return (
    <>
      <div className="flex flex-col h-screen">
        <Header/>
        <div className="flex flex-col items-center h-full justify-center bg-[url('/images/bgs.svg')] border-t-4 border-main ">
          <div className="container">
            <div className={"p-2 rounded-2xl bg-white mx-auto py-8 bg-opacity-80 lg:w-1/2 md:w-2/3"}>
            <h1 className="text-center uppercase font-indie font-semibold my-4 text-3xl text-main">Visszajelzés</h1>
            <hr/>
            <form ref={form} onSubmit={sendEmail} className="mx-auto w-3/4 my-6 flex flex-col gap-3">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md
                  focus:outline-none focus:ring-main
                  focus:border-main focus:z-10 sm:text-sm"
                placeholder="Név"
              />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md
                  focus:outline-none focus:ring-main
                  focus:border-main focus:z-10 sm:text-sm"
                placeholder="Email cím"
              />
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-md
                  focus:outline-none focus:ring-main
                  focus:border-main focus:z-10 sm:text-sm"
                placeholder="Üzenet..."
              />
              <input type="submit" value="Küldés" className="bg-main cursor-pointer text-white rounded-full py-2 w-1/2 mx-auto"/>
            </form>
          </div>
        </div>
      </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <Timer/>
    </>
  )
}


