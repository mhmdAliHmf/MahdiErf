package com.example.charityapp

import android.content.Intent
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import java.text.NumberFormat
import java.util.Locale

class ProjectDetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_project_detail)

        val project = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            intent.getParcelableExtra("EXTRA_PROJECT", Project::class.java)
        } else {
            @Suppress("DEPRECATION")
            intent.getParcelableExtra<Project>("EXTRA_PROJECT")
        }

        if (project == null) {
            Toast.makeText(this, "خطا: اطلاعات پروژه یافت نشد.", Toast.LENGTH_LONG).show()
            finish()
            return
        }

        val title: TextView = findViewById(R.id.tv_detail_title)
        val description: TextView = findViewById(R.id.tv_detail_description)
        val progressBar: ProgressBar = findViewById(R.id.pb_progress)
        val progressDetails: TextView = findViewById(R.id.tv_progress_details)
        val donationAmount: EditText = findViewById(R.id.et_donation_amount)
        val paymentButton: Button = findViewById(R.id.btn_go_to_payment)

        title.text = project.title
        description.text = project.description

        val progress = (project.amountRaised / project.targetAmount * 100).toInt()
        progressBar.progress = progress

        val formatter = NumberFormat.getNumberInstance(Locale("fa", "IR"))
        val raisedFormatted = formatter.format(project.amountRaised)
        val targetFormatted = formatter.format(project.targetAmount)
        progressDetails.text = "مبلغ جمع‌آوری شده: $raisedFormatted از $targetFormatted تومان"

        paymentButton.setOnClickListener {
            val amountText = donationAmount.text.toString()
            if (amountText.isBlank()) {
                Toast.makeText(this, "لطفاً مبلغ کمک را وارد کنید.", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            val amount = amountText.toDouble()

            // Note: PaymentActivity does not exist yet. It will be created in the next step.
            val intent = Intent(this, PaymentActivity::class.java).apply {
                putExtra("EXTRA_AMOUNT", amount)
            }
            startActivity(intent)
        }
    }
}
