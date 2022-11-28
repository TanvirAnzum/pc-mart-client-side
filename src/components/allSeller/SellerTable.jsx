import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { removeUser, updateUser } from "../../APIs/usersAPI";
import GlobalLoader from "../../ui/GlobalLoader";

const SellerTable = ({ seller, index, buyer }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["allSeller"]);
      queryClient.invalidateQueries([`verified-${seller.email}`]);
    },
  });

  const verifyHandler = () => {
    mutate({ mail: seller.email, data: { verified: true } });
    toast.success("User verified!");
  };

  // delete user
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["allSeller"]);
      queryClient.invalidateQueries(["allBuyer"]);
    },
  });

  const deleteHandler = (email) => {
    deleteUser(email);
  };

  return (
    <>
      <tr className="hover text-center">
        <th>{index}</th>
        <td>{seller.displayName}</td>
        <td>{seller.email}</td>
        {!buyer && (
          <td>
            {seller.verified ? (
              "Verified"
            ) : (
              <button
                className="btn btn-primary w-[6em]"
                onClick={verifyHandler}
              >
                Verify
              </button>
            )}
          </td>
        )}
        <td>
          <button
            className="btn btn-error w-[6em]"
            onClick={() => deleteHandler(seller.email)}
          >
            Delete
          </button>
        </td>
      </tr>
      {(isLoading || isDeleting) && <GlobalLoader />}
    </>
  );
};

export default SellerTable;
