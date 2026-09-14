import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

function Login() {
    return (
        <>
            <Head title="Login" />
        </>
    );
}

Login.layout = (page) => <Layout>{page}</Layout>;
export default Login;
