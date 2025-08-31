import transporter from "./transporter.service.js";

const sendOtpMail = async (toEmail:string, otp:string) => {
   
  await transporter.sendMail({  
    from: `"My App" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Verify Your Email - OTP Code",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
        <div style="max-width: 500px; margin: auto; background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; text-align: center;">Email Verification</h2>
          <p style="color: #555; font-size: 16px; text-align: center;">
            Thank you for signing up! Please use the following OTP to verify your email:
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="display: inline-block; background: #2563eb; color: #fff; font-size: 24px; letter-spacing: 6px; font-weight: bold; padding: 12px 20px; border-radius: 8px;">
              ${otp}
            </span>
          </div>
          <p style="color: #777; font-size: 14px; text-align: center;">
            This code is valid for <strong>5 minutes</strong>. If you did not request this, you can safely ignore this email.
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="text-align: center; font-size: 12px; color: #aaa;">
            © ${new Date().getFullYear()} My App. All rights reserved.
          </p>
        </div>
      </div>
    `,
  });
};

export default sendOtpMail