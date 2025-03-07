import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md: md:rounded-none rounded-full mx-auto" src="/rabia-pic..jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        “Hi, I’m Rabia Basharat from Rahim Yar Khan.
 I’m currently studying for a Bachelor’s degree in
 Business at Islamia University (IUB) RYK Campus.

        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
        Rabia Basharat
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        BBA Student, IUB Campus RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page