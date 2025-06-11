import UploadImageField from '@/components/common/UploadImageField';

const EmployeeProfileUploader = ({ onUpload }) => (
  <UploadImageField
    label="Foto de perfil del empleado"
    folder="EmployeeProfile"
    onUpload={onUpload}
  />
);

export default EmployeeProfileUploader;