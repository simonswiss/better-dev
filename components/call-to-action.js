import Image from 'next/image'

import { KitForm } from './kit'

export default function CallToAction() {
  return (
    <div className="max-w-4xl px-4 pt-8 mx-auto mt-24 sm:px-6 lg:px-8">
      <div className="p-8 bg-white rounded-lg shadow">
        <div className="flex items-center gap-4 text-sm md:text-base">
          <div className="shrink-0">
            <Image
              src="/images/twitter-avatar.png"
              className="object-cover rounded-full"
              width={80}
              height={80}
              alt="avatar for simonswiss"
            />
          </div>
          <div>
            <p className="font-medium">
              Created by <span>simonswiss</span>
            </p>
            <p className="text-slate-500">Front-end developer, video editor, content creator.</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <p>Hey, friend! Thank you so much for visiting ❤️</p>

          <p>If you want to be updated when a new post is out, sign up below!</p>
        </div>

        <KitForm />
      </div>
    </div>
  )
}
