function EmailContent() {
  return (
    <div className="border w-[65%] border-brdr rounded-lg bg-white h-34 flex w-full py-10 text-txt ">
      <div className="h-full px-7 flex">
        <div className="w-14 h-14 rounded-full bg-acnt flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">D</span>
        </div>
      </div>
      <div className="w-full pr-16">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Lorem Ipsum</h2>
            <h4>26/2/2022 10:30am</h4>
          </div>
          <button className="text-white bg-acnt px-3 py-1 h-8 text-sm rounded-3xl">
            Mark as favourite
          </button>
        </div>

        <div className="py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio, et dictum
            interdum nisi laoreet quis. Sed lectus. Praesent elementum hendrerit
            tortor. Sed semper lorem at felis. Vestibulum dapibus, mauris nec
            malesuada fames ac turpis velit, rutrum non magna. Sed suscipit, leo
            a pharetra varius, leo nulla fermentum quam, at dignissim enim velit
            a lacus. In tincidunt, lorem ut aliquet auctor, nisi nisl pretium
            nisl, eu facilisis risus justo eu nulla. Fusce dapibus lacinia
            libero, sed vulputate urna hendrerit in. Aenean sit amet felis vel
            nulla elementum tempus. Integer facilisis metus et ipsum elementum,
            vitae efficitur erat interdum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailContent;
