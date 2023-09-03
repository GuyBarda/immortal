export default function Profile({ user }) {
    return <div>{user}</div>;
}

export const getServerSideProps = ({ req }) => {
    // if (!req.headers.cookie?.includes('loggedInUser')) {
    //     console.log('goodbye', req.headers.cookie);

    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     };
    // }

    return {
        props: { user: 'Guy' },
    };
};
