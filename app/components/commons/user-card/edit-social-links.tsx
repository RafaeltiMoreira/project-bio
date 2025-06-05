"use client";

import { Plus } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { startTransition, useState } from "react";
import Modal from "../../ui/modal";
import Button from "../../ui/button";
import { useParams, useRouter } from "next/navigation";
import { createSocialLinks } from "@/app/actions/create-social-links";
import TextInput from "../../ui/text-input";

export default function EditSocialLinks({
  socialMedias,
}: {
  socialMedias?: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    facebook: string;
  };
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavingSocialLinks, setIsSavingSocialLinks] = useState(false);

  const [github, setGithub] = useState(socialMedias?.github || "");
  const [linkedin, setLinkedin] = useState(socialMedias?.linkedin || "");
  const [instagram, setInstagram] = useState(socialMedias?.instagram || "");
  const [twitter, setTwitter] = useState(socialMedias?.twitter || "");
  const [facebook, setFacebook] = useState(socialMedias?.facebook || "");

  const { profileId } = useParams();

  async function handleAddSocialLinks() {
    setIsSavingSocialLinks(true);

    if (!profileId) return;

    await createSocialLinks({
      profileId: profileId as string,
      github,
      linkedin,
      instagram,
      twitter,
      facebook,
    });

    startTransition(() => {
      setIsSavingSocialLinks(false);
      setIsModalOpen(false);
      router.refresh();
    })
  }


  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">Adicionar redes sociais</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-full">
              <FaGithub className="size-6" />
              <TextInput type="text" placeholder="Link do GitHub" value={github} onChange={(e) => setGithub(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FaLinkedin className="size-6" />
              <TextInput type="text" placeholder="Link do Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FaInstagram className="size-6" />
              <TextInput type="text" placeholder="Link do Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FaSquareXTwitter className="size-6" />
              <TextInput type="text" placeholder="Link do Twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FaFacebook className="size-6" />
              <TextInput type="text" placeholder="Link do Facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button onClick={() => setIsModalOpen(false)} className="text-white font-bold">Voltar</button>
            <Button onClick={handleAddSocialLinks} disabled={isSavingSocialLinks}>Salvar</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}