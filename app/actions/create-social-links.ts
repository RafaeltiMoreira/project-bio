"use server";

import { Timestamp } from "firebase-admin/firestore";
import { db } from "../lib/firebase";
import { auth } from "../lib/auth";

export async function createSocialLinks({
  profileId,
  github,
  linkedin,
  instagram,
  twitter,
  facebook,
}: {
  profileId: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  facebook: string;
}) {
  const session = await auth();
  if (!session) return;

  try {
    await db.collection("profiles").doc(profileId).update({
      socialMedias: {
        github,
        linkedin,
        instagram,
        twitter,
        facebook,
      },
      updatedAt: Timestamp.now().toMillis(),
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}