# File Uploads & External Services — Interview Questions

1. What is the direct signed upload flow to Cloudinary?

2. Why upload directly to Cloudinary with a signed payload instead of sending the file through your Next.js server?

3. What must a sign/upload Route Handler validate before issuing upload credentials?

4. Why keep Cloudinary secrets in server-only env vars, not `NEXT_PUBLIC_`?

5. What is the difference between `formData.get("file")` and `formData.getAll("files")`?

6. Why validate file type and size on the server even if the client already checked?

7. When should you use a server-proxy upload pattern instead of direct signed upload?

8. After upload succeeds, what metadata should you store in your database?

9. A public `/api/upload/sign` route has no auth check. What abuse becomes possible?

10. Why should the signature endpoint not be treated as low risk?

11. For a simple avatar upload from a Server Action, when is Server Action enough versus a Route Handler?

12. Why store only Cloudinary URLs and public IDs in the database, not the raw file bytes?

13. What client-side validation is still useful before asking the server for a signature?

14. A team uses the server-proxy pattern for every small image upload. Why might that be unnecessary?

15. What happens if upload succeeds in Cloudinary but saving metadata in the database fails?
