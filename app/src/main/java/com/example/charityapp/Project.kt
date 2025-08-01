package com.example.charityapp

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Project(
    val id: Int,
    val title: String,
    val description: String,
    val targetAmount: Double,
    var amountRaised: Double,
    val imageUrl: String? = null
) : Parcelable
