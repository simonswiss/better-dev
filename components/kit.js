export function KitForm() {
  return (
    <form
      method="post"
      action="https://app.kit.com/forms/7841041/subscriptions"
      class="not-prose mt-8 flex flex-col items-stretch gap-4 md:flex-row"
    >
      <input
        class="shrink-0 required email block w-full rounded-lg border-2 border-slate-400 md:w-80"
        name="email_address"
        aria-label="Email Address"
        placeholder="Your email address"
        required=""
        type="email"
      />
      <div>
        <button
          type="submit"
          class="button block h-full w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-400"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}
