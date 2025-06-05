import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import Button from "../../ui/button";
import EditSocialLinks from "./edit-social-links";
import Link from "next/link";
import { ProfileData } from "@/app/server/get-profile-data";
import AddCustomLink from "./add-custom-link";
import { formatUrl } from "@/app/lib/utils";
import EditUserCard from "./edit-user-card";
import { getDownloadURLFromPath } from "@/app/lib/firebase";

export default async function UserCard({
  profileData,
  isOwner,
}: {
  profileData?: ProfileData;
  isOwner: boolean;
}) {

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src={await getDownloadURLFromPath(profileData?.imagePath) || "Escolha sua melhor foto"} alt="Profile picture" className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">{profileData?.name || "Primeiro e último sobrenome"}</h3>
          { isOwner && <EditUserCard profileData={profileData} />}
        </div>
        <p className="opacity-40">{profileData?.description || "Agradecer a Deus sempre."}</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex justify-between gap-3">
          {
            profileData?.socialMedias?.github && (
              <Link href={profileData?.socialMedias?.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <FaGithub className="w-6 h-6" />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.linkedin && (
              <Link href={profileData?.socialMedias?.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.instagram && (
              <Link href={profileData?.socialMedias?.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <FaInstagram className="w-6 h-6" />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.twitter && (
              <Link href={profileData?.socialMedias?.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <FaSquareXTwitter className="w-6 h-6" />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.facebook && (
              <Link href={profileData?.socialMedias?.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <FaFacebook className="w-6 h-6" />
              </Link>
            )
          }
          {isOwner && <EditSocialLinks socialMedias={profileData?.socialMedias} />}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full min-h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          {profileData?.link1 && (
            <Link href={formatUrl(profileData?.link1.url)} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{profileData?.link1.title}</Button>
            </Link>
          )}
          {profileData?.link2 && (
            <Link href={formatUrl(profileData?.link2.url)} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{profileData?.link2.title}</Button>
            </Link>
          )}
          {profileData?.link3 && (
            <Link href={formatUrl(profileData?.link3.url)} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{profileData?.link3.title}</Button>
            </Link>
          )}
          {isOwner && <AddCustomLink />}
        </div>
      </div>
    </div>
  )
}