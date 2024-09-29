import { useUpdateUser } from "@/api/myUserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { isLoading, updateUser } = useUpdateUser();
  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
