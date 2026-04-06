exports.getRecords = async (req, res) => {
  try {
    const { page = 1, limit = 5, type, category } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Record.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: records
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};