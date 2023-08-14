export default function UserInfo(props) {
    const {user} = props;

    return (
        <>
            <div>
                username : {user?.name ? user?.name : 'Insert your name'}
            </div>
            <div>
                height : {user?.height} cm
            </div>
        </>
    )
}