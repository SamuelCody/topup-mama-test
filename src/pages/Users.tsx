import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import HeaderCmp from "../components/HeaderCmp/HeaderCmp";
import appTheme from "../constants/theme";
import { deleteUser, getAllUsers } from "../redux/actions/authActions";
import { Pencil, Trash } from "@styled-icons/boxicons-regular";
import SpinnerCmp from "../components/SpinnerCmp/SpinnerCmp";
import Pagination from "../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Container)`
  padding: 2rem 1rem;
  max-width: 600px;
`;

const Title = styled.h2`
  color: ${appTheme.COLORS.grey1};
  font-weight: ${appTheme.WEIGHT.mediumBold};
  font-size: 24px;
  padding-bottom: 1rem;
  text-align: center;
`;

const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  box-shadow: 1px 1px 17px rgba(218, 216, 216, 0.33);
  cursor: pointer;
`;

const EachUserWrapper = styled.div`
  display: flex;
  background-color: ${appTheme.COLORS.white};
  justify-content: space-between;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.h2`
  color: ${appTheme.COLORS.grey1};
  font-weight: ${appTheme.WEIGHT.small3};
  font-size: 14px;
  text-align: left;
  margin: 0;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PencilIcon = styled(Pencil)`
  cursor: pointer;
`;

const DeleteIcon = styled(Trash)`
  cursor: pointer;
`;

const Users: React.FC<{
  allUsersData: any;
  loading: any;
  setGetAllUsers: any;
  setDeleteUser: any;
}> = ({ allUsersData, setGetAllUsers, loading, setDeleteUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setGetAllUsers("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderCmp />
      <Wrapper>
        <Title>Users</Title>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <SpinnerCmp
              enabled={true}
              color={appTheme.COLORS.bluePrimary}
              size={50}
              secondaryColor={appTheme.COLORS.white}
            />
          </div>
        ) : (
          <>
            {allUsersData &&
              allUsersData?.data.map((v: any, i: number) => {
                return (
                  <UsersWrapper>
                    <EachUserWrapper>
                      <InfoWrapper>
                        <UserImage src={v.avatar} alt="Name" />
                        <DetailsWrapper>
                          <Text>{v.email}</Text>
                          <Text>
                            {v.first_name} {v.last_name}
                          </Text>
                        </DetailsWrapper>
                      </InfoWrapper>
                      <ActionWrapper>
                        <PencilIcon
                          color="#F85518"
                          size={20}
                          onClick={() => {
                            navigate(`/app/user/${v.id}`);
                          }}
                        />
                        <DeleteIcon
                          color="red"
                          size={20}
                          onClick={() => {
                            setDeleteUser(v.id);
                          }}
                        />
                      </ActionWrapper>
                    </EachUserWrapper>
                  </UsersWrapper>
                );
              })}
          </>
        )}
        <Pagination
          total={allUsersData?.total}
          limit={6}
          pageClick={(data) => {
            setGetAllUsers(`${data.selected + 1}`);
          }}
        />
      </Wrapper>
    </>
  );
};

const mapState = (state: any) => ({
  loading: state.auth.loading,
  allUsersData: state.auth.allUsersData,
});

const mapDispatch = (dispatch: any) => ({
  setGetAllUsers: (pageNo: string) => dispatch(getAllUsers(pageNo)),
  setDeleteUser: (id: string) => dispatch(deleteUser(id)),
});

export default connect(mapState, mapDispatch)(Users);
