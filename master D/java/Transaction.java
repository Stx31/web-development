import java.util.Date;

public class Transaction {
    private String transactionId;
    private String bookId;
    private String userId;
    private Date issueDate;
    private Date returnDate;

    public Transaction(String transactionId, String bookId, String userId) {
        this.transactionId = transactionId;
        this.bookId = bookId;
        this.userId = userId;
        this.issueDate = new Date();
        this.returnDate = null;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public String getBookId() {
        return bookId;
    }

    public String getUserId() {
        return userId;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "transactionId='" + transactionId + '\'' +
                ", bookId='" + bookId + '\'' +
                ", userId='" + userId + '\'' +
                ", issueDate=" + issueDate +
                ", returnDate=" + returnDate +
                '}';
    }
}
