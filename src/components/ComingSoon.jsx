import React from "react";

const Shape = () => (
	<svg
		className="text-[#e5f4f6] dark:text-[#1E2735] absolute top-0 right-0 hidden lg:block -z-[1]"
		width="1024"
		height="539"
		viewBox="0 0 1024 539"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 0H1024V539H539C241.319 539 0 297.681 0 0Z"
			fill="currentColor"
		/>
	</svg>
);

const ComingSoon = () => {
	return (
		<section className="ezy__comingsoon8 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white flex items-end pt-24 relative z-[1] overflow-hidden">
			<Shape />

			<div className="container px-4">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-5 flex flex-col justify-center text-center lg:text-start pr-12">
						<h2 className="font-bold text-[32px] md:text-[45px] leading-none mb-6">
							Service Coming Soon.
						</h2>
						<p className="text-lg opacity-80 mb-12 lg:mb-0">
							Team is working for this service. It will be released soon.
						</p>
					</div>
					<div className="col-span-12 lg:col-span-6 ">
						<img
							src="/GenEarthLogo.jpg"
							alt="comingsoon"
							className="h-auto max-w-full rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ComingSoon;