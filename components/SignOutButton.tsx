function SignOutButton() {
  return (
    <form>
      <button className="flex w-full justify-center rounded-lg items-center gap-4 px-5 py-3 font-semibold text-white transition-colors bg-red-500 hover:text-primary-100">
        <span>خروج</span>
      </button>
    </form>
  );
}

export default SignOutButton;
