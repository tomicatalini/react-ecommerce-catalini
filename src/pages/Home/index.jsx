import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    const title = 'SecondChance';

    return (
        <>
            <Layout>
                <ItemListContainer title={title} />
            </Layout>
        </>
    )
}

export default Home;