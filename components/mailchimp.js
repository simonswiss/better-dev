export default function MailChimpSubscription() {
  return (
    <div id="mc_embed_signup" className="not-prose mt-8">
      <form
        action="https://betterdevscreencasts.us14.list-manage.com/subscribe/post?u=8d885927e62386721e16f3f16&amp;id=4e9ecb2eeb"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll" className="flex flex-col items-stretch gap-2 md:flex-row">
          <div className="mc-field-group ">
            <label htmlFor="mce-EMAIL" className="sr-only">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email block w-full rounded-lg border-2 border-slate-400 md:w-80"
              id="mce-EMAIL"
              placeholder="Your email address"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_8d885927e62386721e16f3f16_4e9ecb2eeb" tabIndex="-1" />
          </div>
          <div className="clear foot">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button block h-full w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-400"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
