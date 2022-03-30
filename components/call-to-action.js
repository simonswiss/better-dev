import Image from 'next/image'

import MailChimpSubscription from './mailchimp'

export default function CallToAction() {
  return (
    <div className="mx-auto mt-24 max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow">
        <div className="flex items-center gap-4 text-sm md:text-base">
          <div className="shrink-0">
            <Image
              src="/images/twitter-avatar.png"
              className="rounded-full object-cover"
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
          <p>Hey, friend! Thank you so much for visiting! ❤️</p>

          <p>If you want to be updated when a new post is out, sign up below!</p>
        </div>

        <MailChimpSubscription />
      </div>
    </div>
  )
}
