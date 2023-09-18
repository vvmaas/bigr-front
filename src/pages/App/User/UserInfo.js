export default function UserInfo(props) {
    const {user, weightData} = props;
    return (
        <>
            <div>
                username : {user?.name ? user?.name : 'insert your name'}
            </div>
            <div>
                height : {user?.height ? <>{user?.height + ' cm'}</> : 'insert your height'}
            </div>
            {weightData[weightData.length-1] && user?.height ? 
                <div>
                    BMI : {(weightData[weightData.length-1]?.value / Math.pow((user?.height/100), 2)).toFixed(1)}
                </div>
                :
                ''
            }
        </>
    )
}