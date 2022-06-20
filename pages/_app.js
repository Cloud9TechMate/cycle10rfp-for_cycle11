import '../styles/globals.css'
// import Judges from './indexx';
// import Test from "./api/court";
import Layout from '../components/Layout';
// import '../styles/table.module.css';



function MyApp({ Component, pageProps }) {
	// console.log("component:", Component);
	// console.log("pageProps", pageProps);
	return (
	<div>
		<div>
			<Layout>
				<Component {...pageProps} />
			</Layout>	
		</div>
	</div>
	)
}

export default MyApp
