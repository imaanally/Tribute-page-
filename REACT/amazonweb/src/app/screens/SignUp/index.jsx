
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const request = useAxios();

  const handleSignUp = async () => {
    if (!name || !email || !phone || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const res = await request({
      method: "POST",
      url: "member/sign-up",
      data: { name, email, phone, password },
    });

    if (res?._error) return;

    toast.success("Account created! You can now sign in.");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <Toaster />
      <h1>Create Account</h1>

      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <br /><br />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <br /><br />
      <label>Phone</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
      />

      <br /><br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <br /><br />
      <button onClick={handleSignUp}>Create Account</button>
    </div>
  );
}

export default SignUp;

