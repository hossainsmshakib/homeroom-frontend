// src/app/uploadroominfo/page.tsx
import dynamic from "next/dynamic";

const RoomInfo = dynamic(() => import("../../components/roomspec/RoomInfo"), { ssr: false });

const UploadRoomInfoPage = () => {
  return <RoomInfo />;
};

export default UploadRoomInfoPage;
