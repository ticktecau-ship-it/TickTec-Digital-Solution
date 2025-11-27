 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "TickTec Digital Solutions - Your Trusted IT Partner",
	description: "TickTec Digital Solutions offers comprehensive IT services including web development, mobile app development, digital marketing, cloud solutions, and custom software development. Transform your business with cutting-edge technology and innovative digital strategies tailored to your needs.", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
