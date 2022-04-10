<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Home Address</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Rent</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Residency</label>
                    <input type="text" class="form-control" placeholder="Amount of time spent in place of residence" required>
                </div>

                <div class="form-group">
                    <label>Living Arrangements</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>No. of Children</label>
                    <input type="text" class="form-control" placeholder="Number of Children living in residence" required>
                </div>

                <div class="form-group">
                    <label>No. of Adults 65+</label>
                    <input type="text" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" required>
                </div>

                <div class="form-group">
                    <label>Emergency Contact Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Primary Email Address"  required>
                </div>

                <div class="form-group">
                    <label>Marital Status</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Priority Population</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Employment Status</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Length of Employment</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Employer Name</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                    <input type="text" class="form-control" placeholder="Job Title" required>
                </div>

                <div class="form-group">
                    <label>Highest Grade</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Graduate</label>
                    <input type="text" class="form-control" placeholder="College Graduate? (T/F)" required>
                </div>

                <div class="form-group">
                    <label>Degree Name</label>
                    <input type="text" class="form-control" placeholder="Please put 'none' if you don't have a College Degree" required>
                </div>
                
                <div class="form-group">
                    <label>Head of Household</label>
                    <input type="text" class="form-control" required>
                </div>
                
                <div class="form-group">
                    <label>Monthly Income</label>
                    <input type="text" class="form-control" required>
                </div>
                
                <div class="form-group">
                    <label>Spousal Income Support</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Worker Compensation</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Veteran Status</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Child Support</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>TANF</label>
                    <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" required>
                </div>

                <div class="form-group">
                    <label>Food Stamps</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" required>
                </div>

                <div class="form-group">
                    <label>SSI</label>
                    <input type="text" class="form-control" placeholder="Supplemental Security Income" required>
                </div>

                <div class="form-group">
                    <label>Unemployment</label>
                    <input type="text" class="form-control" pplaceholder="Total monetary amount of Unemployment benefits" required>
                </div>

                <div class="form-group">
                    <label>Social Security</label>
                    <input type="text" class="form-control" placeholder="Social security number" required>
                </div>

                <div class="form-group">
                    <label>Other Income</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance Desc</label>
                    <input type="text" class="form-control" placeholder="Type of health insurance" required>
                </div>

                <div class="form-group">
                    <label>Covid Status</label>
                    <input type="text" class="form-control" placeholder="(True/False)" required>
                </div>

                <div class="form-group">
                    <label> cid</label>
                    <input type="text" class="form-control" placeholder="Enter the ID for Client"  required>
                </div>
                <button class="btn btn-danger mt-3">Create Client</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>