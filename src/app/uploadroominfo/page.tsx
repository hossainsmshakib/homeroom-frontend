// src/app/uploadroominfo/page.tsx
'use client';
import dynamic from "next/dynamic";

const RoomInfo = dynamic(() => import("../../components/roomspec/RoomInfo"), {
  ssr: false,
});

const UploadRoomInfoPage = () => {
  return <RoomInfo />;
};

export default UploadRoomInfoPage;
