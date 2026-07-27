import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Verify OTP
  const verifyOTP = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Verify Request:", {
      email,
      otp,
    });

    try {
      const response = await axios.post(
        "/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        alert("Login Successful");

        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err.response);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Invalid OTP"
      );
    }

    setLoading(false);
  };

  // Resend OTP
  const resendOTP = async () => {

    console.log("Resend Request:", {
      email,
    });

    try {
      const response = await axios.post(
        "/api/auth/resend-otp",
        {
          email,
        }
      );

      if (response.data.success) {
        alert("New OTP Sent Successfully");

        setTimer(30);
        setCanResend(false);
      }

    } catch (err) {
      console.log(err.response);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Unable to resend OTP"
      );
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
      }}
    >
      <form
        onSubmit={verifyOTP}
        style={{
          width: "380px",
          background: "#fff",
          padding: "35px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Verify OTP</h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          OTP sent to
          <br />
          <b>{email}</b>
        </p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#0B5ED7",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {!canResend ? (
            <p style={{ color: "#666" }}>
              Resend OTP in <b>{timer}s</b>
            </p>
          ) : (
            <button
              type="button"
              onClick={resendOTP}
              style={{
                background: "none",
                border: "none",
                color: "#0B5ED7",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default VerifyOTP;
