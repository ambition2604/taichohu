module.exports = {

    rds: {
        connectionString: "postgresql://root:vti12345@labo-meeting-room-dev.c6vqk5hpf7xs.ap-northeast-1.rds.amazonaws.com:5432/taicho_hokobu_dev",
        schema: "public",
        table: {
            question: "question-tbl",
            report: "reports-tbl"
        }
    }

}
