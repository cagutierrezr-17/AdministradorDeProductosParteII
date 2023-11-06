import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import "./detailProduct.css"


const DetailProduct = () => {

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [descrip, setDescrip] = useState("");

	const params = useParams();
	let productid = params.id;

	useEffect(() => {
		getProductData();
	}, [])

	const getProductData = async () => {
		try {
			let result = await axios.get("http://localhost:8090/api/product/getone/" + productid)
			setName(result.data.name)
			setPrice(result.data.price)
			setDescrip(result.data.description)
		} catch (err) {
			console.log(err);
		};
	}

	const navigate = useNavigate();

	const goHome = () => {
		navigate("/");
	}
	return (
		<div className="details">
			<h2>{name}</h2>
			<p className="info1">Precio: {price}</p>
			<p className="info1">Descripción: {descrip}</p>
			<br />
			<button onClick={goHome}>Home</button>
		</div>
	)
}

export default DetailProduct;