"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    };
    
    return (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center vh-90">
            <div className="col-lg-5 p-4 shadow">
              <h2 className="fw-bold lead mb-4">Login</h2>
    
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control p-3 mb-4"
                  placeholder="Your email"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control p-3 mb-4"
                  placeholder="Your password"
                  required
                />
                <button
                  className="btn btn-lg w-100 btn-primary mb-2"
                  disabled={loading}
                >
                  {loading ? "Please wait.." : "Submit"}
                </button>
              </form>

    
              <Link
                href="/forgot-password"
                className="nav-link text-center mt-3 text-danger"
              >
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      );
}