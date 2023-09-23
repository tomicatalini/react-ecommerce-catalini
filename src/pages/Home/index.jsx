import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    const title = 'SecondChance';
    const body = 'Este es el body';

    return (
        <>
            <Layout>
                <ItemListContainer title={title} body={body}/>
            </Layout>
        </>
    )
}

export default Home;