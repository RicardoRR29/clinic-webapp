import { ProfileCard } from "../ProfileCard";
import "./style.scss";

export default function ProfileList() {
  const profileList = [
    {
      name: "Juan Carlos Dijk",
      occupation: "General Practitioner",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jessica Lopes",
      occupation: "Senior Doctor",
      image:
        "https://plus.unsplash.com/premium_photo-1661741194134-c533748d8117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvciUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "John Doe",
      occupation: "Senior Doctor",
      image:
        "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ferdinand Rousseau",
      occupation: "Senior Psychologist",
      image:
        "https://www.cbtkenya.org/wp-content/uploads/2019/01/counselling-programs-767x630.jpg",
    },
    {
      name: "Juan Carlos Dijk",
      occupation: "General Practitioner",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jessica Lopes",
      occupation: "Senior Doctor",
      image:
        "https://plus.unsplash.com/premium_photo-1661741194134-c533748d8117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvciUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "John Doe",
      occupation: "Senior Doctor",
      image:
        "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ferdinand Rousseau",
      occupation: "Senior Psychologist",
      image:
        "https://www.cbtkenya.org/wp-content/uploads/2019/01/counselling-programs-767x630.jpg",
    },
    {
      name: "Juan Carlos Dijk",
      occupation: "General Practitioner",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jessica Lopes",
      occupation: "Senior Doctor",
      image:
        "https://plus.unsplash.com/premium_photo-1661741194134-c533748d8117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvciUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "John Doe",
      occupation: "Senior Doctor",
      image:
        "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ferdinand Rousseau",
      occupation: "Senior Psychologist",
      image:
        "https://www.cbtkenya.org/wp-content/uploads/2019/01/counselling-programs-767x630.jpg",
    },
    {
      name: "Juan Carlos Dijk",
      occupation: "General Practitioner",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jessica Lopes",
      occupation: "Senior Doctor",
      image:
        "https://plus.unsplash.com/premium_photo-1661741194134-c533748d8117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvciUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "John Doe",
      occupation: "Senior Doctor",
      image:
        "https://images.unsplash.com/photo-1609188076864-c35269136b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ferdinand Rousseau",
      occupation: "Senior Psychologist",
      image:
        "https://www.cbtkenya.org/wp-content/uploads/2019/01/counselling-programs-767x630.jpg",
    },
  ];
  return (
    <div className="profile-list p-3">
      {profileList.map((profile, index) => (
        <ProfileCard key={"profile-" + index} profile={profile} />
      ))}
    </div>
  );
}
