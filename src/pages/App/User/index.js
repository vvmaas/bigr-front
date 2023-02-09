import { useState, useEffect } from "react";
import useUser from "../../../hooks/api/useUser";
import useUpdateUser from "../../../hooks/api/useUpdateUser";
import useToken from "../../../hooks/useToken";

export default function User() {
    const { user } = useUser();
    const token = useToken();

    return (
        <>
            <div>
                {user?.name ? user?.name : 'name'}
            </div>

            <div>
                weight : {user?.weight} kg
            </div>
            <div>
                height : {user?.height} kg
            </div>
        </>
    )
}