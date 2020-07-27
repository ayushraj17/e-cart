import React, { useState } from "react";

import List from "./List";
import { Flex, Box, Text, Icon } from "@chakra-ui/core";

function App() {
	const [data, setData] = useState([
		{ id: 0, name: "taco", qty: 1 },
		{ id: 1, name: "coke", qty: 0 },
		{ id: 2, name: "mask", qty: 3 },
		{ id: 3, name: "band", qty: 0 },
	]);

	const updateQty = (id, newQty) => {
		const newItems = data.map((item) => {
			if (item.id === id) {
				return { ...item, qty: newQty };
			}
			return item;
		});
		setData(newItems);
	};

	const grandTotal = data.reduce((total, item) => total + item.qty, 0);

	const deleteItem = (itemId) => {
		const array = [...data];
		array.splice(itemId, 1);
		setData(array);
	};

	const renderList = () => {
		return data.map(({ name, qty, id }) => (
			<List
				key={id}
				item={name}
				qty={qty}
				id={id}
				updateQty={updateQty}
				deleteItem={deleteItem}
			/>
		));
	};
	return (
		<div>
			<Flex align="center" justify="center" mt={100} direction="column">
				<Box px={4} mb={10} bg="gray.100">
					<Text fontSize="1.5em">
						<Icon name="star" mb={2} mr={2} />
						Cart: {grandTotal}
					</Text>
				</Box>
				{renderList()}
			</Flex>
		</div>
	);
}

export default App;
