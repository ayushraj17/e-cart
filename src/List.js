import React from "react";
import { Button } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

function List({ item, deleteItem, id, qty, updateQty }) {
	const renderDeleteButton = () => {
		if (qty) {
			return (
				<Button
					variantColor="blue"
					m={2}
					onClick={() => {
						subtractOne();
					}}
				>
					<Icon name="minus" />
				</Button>
			);
		} else {
			return (
				<Button variantColor="yellow" m={2} onClick={() => deleteItem(id)}>
					<Icon name="delete" />
				</Button>
			);
		}
	};

	const addOne = () => updateQty(id, qty + 1);
	const subtractOne = () => updateQty(id, qty - 1);

	return (
		<div>
			<Flex mb={4}>
				<Box w={256} px={4} bg="gray.100">
					<Text fontSize="1.5em">{item}</Text>
				</Box>
				<Box backgroundColor="gray.50" m={2} px={4}>
					<Text fontSize="1.5em">{qty}</Text>
				</Box>
				<Button
					variantColor="green"
					m={2}
					onClick={() => {
						addOne();
					}}
				>
					<Icon name="add" />
				</Button>
				{renderDeleteButton()}
			</Flex>
		</div>
	);
}

export default List;
