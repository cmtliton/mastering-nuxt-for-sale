import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // ১. জিমেইল বা SMTP কনফিগারেশন
  // (মনে রাখবেন: জিমেইলের ক্ষেত্রে "App Password" তৈরি করে ব্যবহার করতে হবে)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL, // আপনার ইমেইল (nuxt.config তে সেট করব)
      pass: process.env.SMTP_PASSWORD, // আপনার অ্যাপ পাসওয়ার্ড
    },
  });

  // ২. ইমেইল বডি সাজানো
  const mailOptions = {
    from: `"Nuxt Course Sales" <${process.env.SMTP_EMAIL}>`,
    to: process.env.MY_EMAIL, // যেখানে আপনি অর্ডার রিসিভ করবেন
    subject: `New Order: ${body.package} Package - ${body.name}`,
    html: `
      <h3>New Order Request Received!</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Selected Package:</strong> ${body.package}</p>
      <p><strong>Price:</strong> ${body.price} BDT</p>
      <br/>
      <p>Please contact them and send the payment/download link.</p>
    `,
  };

  // ৩. ইমেইল পাঠানো
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Order request sent successfully!" };
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "Failed to send email. Please try again.",
    });
  }
});
