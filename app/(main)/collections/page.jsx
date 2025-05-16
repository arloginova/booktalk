import { CollectionsScreen } from '@/screens/Collections';

const CollectionsPage = async ({ searchParams }) => {
	const { genre } = await searchParams;

	return <CollectionsScreen genre={genre} />;
};

export default CollectionsPage;