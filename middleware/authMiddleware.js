const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(403).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

exports.verifyAdmin = (req, res, next) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access only" });
    next();
};

exports.verifyEmployee = (req, res, next) => {
    if (req.user.role !== "employee") return res.status(403).json({ message: "Employee access only" });
    next();
};
