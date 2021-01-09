const registration = async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  let encyptedPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    password: encyptedPass,
  });

  await user.save();
  const token = user.generateAuthToken();
  res.status(200).send(token);
};

export { registration };
